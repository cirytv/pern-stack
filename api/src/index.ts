import colors from 'colors'
import server from './server.ts'

const port = process.env.PORT || 4000
server.listen(port, () => {
  console.log(colors.cyan.bold(`rest api running in port ${port}`))
})
