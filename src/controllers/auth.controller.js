const bcrypt = require('bcryptjs');

const ResponseHtttpRequests = require("../classes/response-http-requests.class");
const { User } = require('../models');  

const auth = {
    async login(req, res) {

        return ResponseHtttpRequests.status401({ res });

        try {
            const { body = {} } = req;

            const { username, password } = body;

            if (!username || !password) {
                return ResponseHtttpRequests.status400({ res });
            }

            try {
                const user = await User.scope('withPassword').findOne({
                    where: {
                        username: username
                    }
                })

                const { password: storedPasswordHash } = user;

                //console.log("aaaa");

                const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

                const compare = await bcrypt.compare(hash, storedPasswordHash);

                // if () {

                // }

                // console.log({ compare: compare })

                return 

            } catch (err) {
                console.error(err);
                return ResponseHtttpRequests.status500({ res });
            }

            return ResponseHtttpRequests.status200({ res });

        } catch (e) {
            return ResponseHtttpRequests.status500({ res });
        }

    }
}

module.exports = auth;