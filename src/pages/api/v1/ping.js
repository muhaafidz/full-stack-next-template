const get = (req, res) => {
  try {
    const data = {
      message: 'pong',
    }
    res.status(200).json(data)
  } catch (e) {
    res.status(1000).json({ error: 'error: ' + e })
  }
  return
}

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      get(req, res)
      return
    default:
      res.status(400).json({ message: 'Invalid method' })
  }
}
