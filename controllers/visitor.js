const model   = require("../models/visitor");

// Create new visitor

exports.visitor = async (ctx) => {
   
    const userDetails = await model.modelUser(ctx.request.body)
    ctx.body = userDetails
    
}

// Get one
exports.getvisitor = async (ctx) => {
    console.log(ctx.params.id) 
    const userDetails = await model.fetchUser(ctx.params.id)
    console.log(userDetails)
    ctx.body = userDetails
}

//Update one
//const updatedReservation = await channelModel.updateReservation(task.sid, reservations[0].sid, reservationStatus);
//

// exports.updatevisitor = async (ctx) =>  {
//     console.log(ctx.params.id)
//     const userDetails = await model.updateone(ctx.params.id)
//     console.log(userDetails)
//     ctx.body = userDetails
// }

exports.updatevisitor = async (ctx) =>  {
    console.log(ctx.params.id)
     let documentQuery = ctx.params.id; // Used to find the document
     let valuesToUpdate = ctx.request.body;
    const userDetails = await model.updateuser(documentQuery, valuesToUpdate);
    console.log(userDetails)
    ctx.body = userDetails
}

// Delete one
exports.deletevisitor = async (ctx) =>  {
    console.log(ctx.params.id)
        let documentQuery = ctx.params.id;// Used to find the document
    ctx.body = await model.deleteuser(documentQuery);
    // console.log(userDetails)
    // ctx.body = userDetails
}