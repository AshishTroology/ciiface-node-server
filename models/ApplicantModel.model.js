const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const applicantSchema = new mongoose.Schema({
    token: { type: String },
    applicantId: { type: Number },
    unitName: { type: String },
    criteria: { type: String },
    contactPerson: { type: String },
    sector: { type: String },
    product: { type: String },

    titleName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    phoneNo: { type: String },
    mobileNo: { type: String },
    // email: { type: String },
    email: { type: String, index: true, unique: true },
    secondaryEmail: { type: String },

    addressLine1: { type: String },
    addressLine2: { type: String },
    zipCode: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },

    organizationName: { type: String },
    hightestRanking: { type: String },
    designation: { type: String },
    organizationEmail: { type: String },
    organizationMobile: { type: String },
    organizationapplicantUnit: { type: String },

    applicantUnit: { type: String },
    operationForm: { type: String },
    totalEmployee: { type: String },
    applicanthightestRanking: { type: String },
    applicantDesignation: { type: String },
    applicantEmail: { type: String },
    applicantMobile: { type: String },
    applicantProduct: { type: String },

    contactTitle: { type: String },
    contactFirstName: { type: String },
    contactLastName: { type: String },
    contactDesignation: { type: String },
    contactMobile: { type: String },
    contactEmail: { type: String },

    applicantAddress1: { type: String },
    applicantAddress2: { type: String },
    applicantZipCode: { type: String },
    applicantCountry: { type: String },
    applicantState: { type: String },
    applicantCity: { type: String },

    contactAddress1: { type: String },
    contactAddress2: { type: String },
    contactZipCode: { type: String },
    contactCountry: { type: String },
    contactState: { type: String },
    contactCity: { type: String },

    applicantPlant: { type: String },
    applicantEquipment: { type: String },

    annualOrganization: { type: String },
    annualYear: { type: String },
    annualApplicant: { type: String },
    applicantYear: { type: String },



    annualOrganizationRupee: { type: String },
    annualApplicantRupee: { type: String },
    contactPerson2: { type: String },
    contactDesignation2: { type: String },
    contactEmail2: { type: String },
    contactMobile2: { type: String },
    contactAddress2: { type: String },
    contactCountry2: { type: String },
    contactState2: { type: String },
    contactCity2: { type: String },
    contactZipCode2: { type: String },
    uploadForm: { type: String },
    uploadFormUAM: { type: String },
    classification: { type: String },
    FoodCategoryNameNumber: { type: String },
    code1:{type:String},
    code2:{type:String},
    code3:{type:String},
    code4:{type:String},


    otherproduct: {type:String},
    othersector: {type:String},
    assessment: { type: Array },
    amount:{ type: String },
    amountStatus: { type: Boolean, default: false },

    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    userStatus: { type: Boolean, default: false },
    invite: { type: Boolean, default: false },
    status: { type: String, default: "active" },
});

module.exports = mongoose.model("applicant", applicantSchema);