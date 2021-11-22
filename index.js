const express = require('express');
const repoContext = require('./repository/music_wrapper');
const cors = require('cors');
const {validationSong} = require('./middleware/music-validation')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, function(){
    console.log("Server started. Listening on port 5000.");
});
app.get('/api/music', (req,res) => {
    const id = req.params.id;
    const Music = repoContext.songs.findAllSongs();
    return res.send(songs);
});
app.post('/api/music',[validationSong], (req,res) => {
    const newMusic = req.body;
    const addedMusic = repoContext.songs.createSong(newSong);
    return res.send(addedSong);
})
app.put('/api/music', [validationSong], (req,res) => {
    const id = req.params. id;
    const songPropertiesToUpdate = req.body;
    const updatedProducts = repoContext.songs.updateSong(id, songPropertiesToUpdate);
    return res.send(updateSong)
})
app.delete('/api/music/:id', (req, res) => {
    const id = req.params.id;
    const updatedDataSet = repoContext.songs.deleteSong(id);
    return res.send(updatedDataSet);
})
