const authservices = require('./../services/authServices')


exports.data_enter = function (req, res) {
    var subject = req.body.subject;
    var content = req.body.content;
    authservices.data_enter(subject, content,
      function (err, results) {
        if (err) {
          res.send({
            "code": 200,
            "failed": "Error Occured"
          })
        } else {
          res.send({
            "code": 200,
            "success": "Data Entered"
          });
  
        }
      }
    );
  
  }


  exports.get_data = function (req, res) {
    authservices.get_data(
      function (err, results) {
        if (err) {
          res.send({
            "code": 200,
            "failed": "Error Occured"
          })
        } else {
          res.send({
            "code": 200,
            "results":results
          });
  
        }
      }
    );
  
  }  
  