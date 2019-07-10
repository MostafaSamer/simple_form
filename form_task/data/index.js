const nodeCouchdb = require('node-couchdb');

const couch = new nodeCouchdb({
    auth: {
        user: 'admin',
        pass: 'root'
    }
})

const dbname = 'form_task';
const all_data = '_design/user_view/_view/new-view'

// insert new video with details then insert it is tags
var insert_data = function(send_object) {
    // insert the data
    couch.uniqid().then((ids)=> {
        const id = ids[0];
        couch.insert(dbname, {
            _id: id,
            f_name: send_object.f_name,
            s_name: send_object.s_name,
            email: send_object.email,
            pass: send_object.pass,
            adress: send_object.adress,
            phone: send_object.phone,
            gender: send_object.gender
        }).then(
            function(data, header, status) {
                console.log("Data Saved!");
            },
            function(err) {
                console.log("Error in Saving new doc!");
            }
        )
    })

}

//List all user
var list_users = function(callback) {
    couch.get(dbname, all_data).then(
        (data, headers, status)=> {
            //console.log(data);
            callback(data)
        },
        (err)=> {
            console.log("Error in getting data");
        }
    )
}

// get the data value from the list
var fetch_data = function(data, callback) {
    //let returned_data;
    let temp;
    for (var i = 0; i < data.length; i++) {
        temp = data.shift();
        //console.log(temp);
        data.push(temp.value)
    }
    console.log(data);
    callback(data)
}

module.exports = {
    insert_data: insert_data,
    list_users: list_users,
    fetch_data: fetch_data
};
