// @desc        To gat all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.getBootcamps = (req,res,next) =>{
    res.status(200).json({success:true,msg:'show all bootcamps'});
}


// @desc        To gat single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      public
exports.getBootcamp = (req,res,next) =>{
    res.status(200).json({success:true,msg:`Get Bootcamp ${req.params.id}`});
}


// @desc        create new bootcamps
// @route       POST /api/v1/bootcamps
// @access      ptivate
exports.createBootcamp = (req,res,next) =>{
    res.status(200).json({success:true,msg:'Create New bootcamps'});
}


// @desc        Update bootcamps
// @route       PUT /api/v1/bootcamps/:id
// @access      ptivate
exports.updateBootcamp = (req,res,next) =>{
    res.status(200).json({success:true,msg:`Update Bootcamp ${req.params.id}`});
}


// @desc        Delete bootcamps
// @route       PUT /api/v1/bootcamps/:id
// @access      ptivate
exports.deleteBootcamp = (req,res,next) =>{
    res.status(200).json({success:true,msg:`Delete Bootcamp ${req.params.id}`});
}