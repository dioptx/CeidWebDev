/**
 * Created by nomaterials on 03/05/2017.
 */

var mongoose = require('mongoose');

// Schema [ Model ] ~= Layout for a model

// Schema/Model Initialization

var adminSchema = mongoose.Schema({
    username: String,
    password: String
});
var Admin = mongoose.model("Admin", adminSchema);
//----------------------------------------------------------------

// Employee
var EmployeeSchema = mongoose.Schema({

});
var Employee = mongoose.model("Employee",EmployeeSchema)
//----------------------------------------------------------------


// Local Store
var LocalStoreSchema = mongoose.Schema({

});
var LocalStore = mongoose.model("LocalStore",LocalStoreSchema)
//----------------------------------------------------------------


//Transit Hub
var TransitHubSchema = mongoose.Schema({

});
var TransitHub = mongoose.model("TransitHub",TransitHubSchema)
//----------------------------------------------------------------

//Sender
var SenderSchema = mongoose.Schema({

});
var Sender = mongoose.model("Sender",SenderSchema)
//----------------------------------------------------------------

//Recipient
var RecipientSchema = mongoose.Schema({

});
var Recipient = mongoose.model("Recipient",RecipientSchema)
//----------------------------------------------------------------

//Website
var WebsiteSchema = mongoose.Schema({

});
var Website = mongoose.model("Website",WebsiteSchema)
//----------------------------------------------------------------
//AdminControlPanel
var AdminControlPanelSchema = mongoose.Schema({

});
var AdminControlPanel = mongoose.model("AdminControlPanel",AdminControlPanelSchema)
//----------------------------------------------------------------




// Create instance of admin # Testing
var admin1 = new Admin({ username: 'JoBell2312',
                         password: 'hashmehashme'});
// Save to MongoDB
admin1.save();



var employeeSchema = mongoose.Schema({
    username: String,
    password: String
});
var Employee = mongoose.model("Employee", employeeSchema);





module.exports = {adminCP: Admin,
                  employee: Employee};


