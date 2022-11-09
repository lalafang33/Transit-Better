const { formSchema } = require("../../../common");

const validateForm = (req, res) => {
  const formData = req.body; 
  formSchema
    .validate(formData)
    .catch(error => {
      res.status(422).send();
      console.log("ERROR", error.errors)
    })
    .then(valid => {
      if(valid) {
        console.log("form is good "); 
      }
    });
};

module.exports = validateForm; 