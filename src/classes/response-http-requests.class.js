module.exports = class ResponseHtttpRequests {
    
    static status200({ res }) {
        return res.status(200).send({
            message: 'Ok'
        });
    }

    static status400({ res }) {
        return res.status(400)
                .send({ message: 'Bad Request' });
    }

    static status401({ res }) {
        return res.status(401)
                .send({ message: 'Unauthorized' });
    }

    static status500({ res }) {
        return res.status(500)
                .send({ message: 'Internal Server Error' });
    }

}