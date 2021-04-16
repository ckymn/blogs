const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    short : {
        type : String,
        require : true
    },
    long : {
        type : String,
        require : true
    },
    site : {
        type : String,
        require : true,
        uppercase : true
    },
    g_link : {
        type : String,
        require : true
    },
    s_link:{
        type: String,
        require : true
    },
    t_link:{
        type: String,
        require : true
    }

},{timestamps : true});


module.exports = mongoose.model("blog", blogSchema);
