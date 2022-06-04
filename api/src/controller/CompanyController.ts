import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import Logger from '../../lib/logger';
import { Company } from '../entity/Company';

class CompanyController {
  static listAll = async (req: Request, res: Response) => {
    const companyRepository = getRepository(Company);
    const company = await companyRepository.find({
      select: ['companyId', 'title', 'description', 'logo', 'note'],
    });
    res.send(company);
  };

  static getOneById = async (req: Request, res: Response) => {
    const { companyId } = req.params;

    const companyRepository = getRepository(Company);
    try {
      const company = await companyRepository.findOneOrFail(companyId, {
        select: ['companyId', 'title', 'description', 'logo', 'note'], // We dont want to send the password on response
      });
      res.send(company);
    } catch (error) {
      Logger.error(res.status(404).send('company not found'));
    }
  };

  static newCompany = async (req: any, res: Response) => {
    const companyRepository = getRepository(Company);

    const { title, description, note } = req.body;
    const { buffer } = req.file;

    const company = new Company();
    company.title = title;
    company.description = description;
    company.logo = buffer;
    company.note = note;

    const errors = await validate(company);
    if (errors.length > 0) {
      Logger.error(res.status(400).send(errors));
      return;
    }

    companyRepository.save(company);

    Logger.info(res.status(201).send('company created'));
  };

  static editCompany = async (req: Request, res: Response) => {
    const { companyId } = req.params;
    const {
      title, description, logo, note,
    } = req.body;
    const companyRepository = getRepository(Company);
    let company;

    try {
      company = await companyRepository.findOneOrFail(companyId);
    } catch (error) {
      // If not found, send a 404 response
      Logger.error(res.status(404).send('company not found'));
      return;
    }

    company.title = title;
    company.description = description;
    company.logo = logo;
    company.note = note;

    const errors = await validate(company);
    if (errors.length > 0) {
      Logger.error(res.status(400).send(errors));
      return;
    }

    try {
      await companyRepository.save(company);
    } catch (e) {
      Logger.warn(res.status(409).send('nmname already in use'));
      return;
    }

    companyRepository.save(company);
    // After all send a 204 (no content, but accepted) response
    Logger.info(res.status(204).send());
  };

  static deleteCompany = async (req: Request, res: Response) => {
    const { companyId } = req.params;

    const companyRepository = getRepository(Company);
    let company: Company;
    try {
      company = await companyRepository.findOneOrFail(companyId);
    } catch (error) {
      Logger.error(res.status(404).send('company not found'));
      return;
    }
    companyRepository.delete(companyId);

    Logger.info(res.status(204).send());
  };
}

export default CompanyController;
