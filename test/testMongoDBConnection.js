const { connectDB } = require('../lib/mongodb');

async function testMongoDBConnection() {
  try {
    const { client } = await connectDB(); // Assurez-vous d'avoir une fonction connectDB() qui renvoie une promesse pour se connecter à la base de données MongoDB
    // La connexion à MongoDB est réussie, vous pouvez effectuer des opérations ici
    console.log('MongoDB connection test successful');
    // Fermer la connexion après utilisation
    await client.close();
  } catch (error) {
    // En cas d'erreur de connexion
    console.error('Failed to connect to MongoDB:', error);
  }
}

module.exports = testMongoDBConnection;
