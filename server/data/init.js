const Role = db.role;

function init() {
    Role.create({
      id: 1,
      name: 'user'
    });
   
    Role.create({
      id: 2,
      name: 'admin'
    });
   
    Role.create({
      id: 3,
      name: 'superadmin'
    });
  }
