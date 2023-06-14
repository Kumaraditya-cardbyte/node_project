const User = require('../model/UserModel')
const {v4: uuidv4} = require('uuid')

const getAllUser = (req, res) => {
    console.log("Fetching all the Users")
    User.find({})
        .then((data) => {
            res.json(data)
            res.end()

        })
        .catch((error) => {
            console.error("Error while fetching all the User from the db")
            console.error(error)
            res.send("Error while fetching all the User from the db")
            res.end();
        })

}


const getUser = (req, res) => {
    console.log("Fetching a particular product")

    User.findById(req.params.id)
        .then((data) => {
            console.log(`Fetched data ${data}`)
            res.json(data)
            res.end();
        })
        .catch((error) => {
            console.log(`Error while fetching User with UserId: ${req.params.id}`)
            res.send("Error while fetching User")
            res.end();
        })
}

const updateUser = (req, res) => {
    console.log("Updating a particular User")
    User.findById(req.params.id)
        .then((data) => {
            console.log(`Fetched User is ${data}`)
            data['firstName'] = req.body.firstName
            data['lastName'] = req.body.lastName
            data['emailId'] = req.body.emailId
            data['phoneNumber'] = req.body.phoneNumber
            data.save()
                .then(r => {
                    console.log(`${req.params.id} is updated with the latest info`)
                    res.send("updated the User")
                    res.end();
                })
                .catch((error) => {
                    console.log("Error while updating the UserId ")
                    res.send('Error while saving back the User')
                    res.end()
                })

        })
        .catch((error) => {
            console.log("Error while updating the User")
            console.error(error)
            res.send('Error while looking for the User')
            res.end()

        })
}

const deleteUser = (req, res) => {
    console.log("Deleting a particular User")
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log(`${req.params.id} deleted from mongodb`);
            res.send("Deleted the user").end()
        })
        .catch((error) => {
            console.error(error)
            res.send('Error while deleting the particular user ').end()
        })
}

const createUser = (req, res) => {
    const {firstName, lastName, emailId, phoneNumber} = req.body;
    const obj = new User({
        _id: uuidv4(),
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        emailId: emailId
    })

    obj.save()
        .then(() => {
            console.log("User saved to the database.");
            res.send(obj).end();
        })
        .catch(error => {
            console.error(error)
            res.send("Error while creating the user").end()
        })

}

module.exports = {
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    createUser
}