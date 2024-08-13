const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM patient', (err, patients) => {
            if (err) {
                res.json(err);
            }
            res.render('patients', {
                data: patients
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO patient set ?', data, (err, patient) => {
            console.log(patient);
            res.redirect('/');
        })
    })
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM patient WHERE id = ?", [id], (err, rows) => {
            res.render('patients_edit', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newpatient = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE patient set ? where id = ?', [newpatient, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM patient WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;
