app.use(express.static('./dist/goyal-client.json'));
app.get(`/*`, function(req, res) {
    res.sendFile('index.html', {root: 'dist/goyal-client.json/'}
  );
  });
  app.listen(process.env.PORT || 8080);