export const config = {
  "dev": {
    "username": process.env.UDAGRAM_DB_USERNAME,
    "password": process.env.UDAGRAM_DB_PSSWD,
    "database": process.env.UDAGRAM_DB_DATABASE,
    "host": "udagramyangdev.cy2g4sigwhy6.eu-central-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "eu-central-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-yang-dev"
  },
  "prod": {
    "username": process.env.UDAGRAM_DB_USERNAME,
    "password": process.env.UDAGRAM_DB_PSSWD,
    "database": process.env.UDAGRAM_DB_DATABASE,
    "host": "udagramyangdev.cy2g4sigwhy6.eu-central-1.rds.amazonaws.comre",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.UDAGRAM_DB_SECRET
  }
}
