const get = (req, res) => {
  try {
    /* ... Read Data and DB Query Logic ... */

    const data = {
      message: 'Operation Success',
      data: [
        { message: 'pong 1' },
        { message: 'pong 2' },
        { message: 'pong 3' },
      ],
    }
    res.status(200).json(data)
  } catch (e) {
    res.status(1000).json({ error: 'error: ' + e })
  }
  return
}
const create = (req, res) => {
  try {
    /* ... Read Data and DB Query Logic ... */
    console.log('dataaaaaa', req)
    const data = {
      message: 'Successfully Created',
      data: req.body,
    }
    res.status(200).json(data)
  } catch (e) {
    res.status(1000).json({ error: 'error: ' + e })
  }
  return
}
const update = (req, res) => {
  try {
    /* ... Read Data and DB Query Logic ... */

    const data = {
      message: 'Successfully Updated',
      data: req.body,
    }
    res.status(200).json(data)
  } catch (e) {
    res.status(1000).json({ error: 'error: ' + e })
  }
  return
}
const remove = (req, res) => {
  try {
    /* ... Read Data and DB Query Logic ... */

    const data = {
      message: 'Successfully Deleted',
      data: req.data,
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
      case 'POST':
        create(req, res)
        return
      case 'PUT':
        update(req, res)
        return
      case 'DELETE':
        remove(req, res)
        return
      default:
        res.status(400).json({ message: 'Invalid method' })
    }

  }
  