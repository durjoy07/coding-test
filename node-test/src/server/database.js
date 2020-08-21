import Mongoose from 'mongoose'; //ODM

//Importing Configuration Files from config/index.js
import { MongodbConfig } from '../../config';

const ConnectToDatabase = () => {
    //Mongoose connection information
    Mongoose.connect(MongodbConfig.databaseConnection.uri(), {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    const db = Mongoose.connection;
    db.on('error', console.error.bind(console, 'OH! Connection Error:'));
    db.once('open', () => {
        console.log(`YES! Connected to Database @ ${MongodbConfig.databaseConnection.uri()}`);
    });
}

export default ConnectToDatabase;
