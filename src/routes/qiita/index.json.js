import fetch from 'node-fetch'

export const get = (req, res) => {
  const fetchOption = {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  }
  fetch(`https://qiita.com/api/v2/users/t_o_d/items`,fetchOption)
    .then(items => items.json())
    .then(data => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(data))
    })
}