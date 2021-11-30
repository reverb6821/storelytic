import * as httpStatus from 'http-status';

// handle not found errors
export const notFound = (req: any, res: { status: (arg0: number) => void; json: (arg0: { success: boolean; message: string; }) => void; end: () => void; }, next: any) => {
    res.status(httpStatus.NOT_FOUND);
    res.json({
        success: false,
        message: 'Requested Resource Not Found'
    });
    res.end();
};

// handle internal server errors
export const internalServerError = (err: { status: any; message: any; extra: any; }, req: any, res: { status: (arg0: any) => void; json: (arg0: { message: any; extra: any; errors: any; }) => void; end: () => void; }, next: any) => {
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
    res.json({
        message: err.message,
        extra: err.extra,
        errors: err
    });
    res.end();
};