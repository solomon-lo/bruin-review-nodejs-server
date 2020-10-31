const express = require('express')

var cors = require('cors')

const app = express()
app.use(cors())
const PORT = 5000

app.listen(PORT, ()=> console.log(`Server running on: http://localhost:${PORT}`))


app.get("api/v1/add", (req, res) => {
    const {first = 0, second = 0} = req.query
    const total = parseInt(first) + parseInt(second)
    res.status(200).send({
        success:'true',
        total
    })

})

app.get("/", (req, res) => {
    const {first = 0, second = 0} = req.query
    const total = parseInt(first) + parseInt(second)
    res.status(200).send({
        success:'true',
        total
    })

})

const printLinks = [
    {
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Felectronic-brain-vector-17222489&psig=AOvVaw3PvMPgxExIXY8TL6ANF0am&ust=1602980185366000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCSx9asuuwCFQAAAAAdAAAAABAD',
        title:  'The Review Inaugural Winter 2019',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/BRInauguralEdition.pdf'
    },
    {
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Felectronic-brain-vector-17222489&psig=AOvVaw3PvMPgxExIXY8TL6ANF0am&ust=1602980185366000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCSx9asuuwCFQAAAAAdAAAAABAD',
        title:  'The Review II Spring 2019',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+II+Spring+2020.pdf'
    },
    {
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Felectronic-brain-vector-17222489&psig=AOvVaw3PvMPgxExIXY8TL6ANF0am&ust=1602980185366000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCSx9asuuwCFQAAAAAdAAAAABAD',
        title:  'The Review III Winter 2020',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+III+Winter+2020.pdf'
    },
    {
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Felectronic-brain-vector-17222489&psig=AOvVaw3PvMPgxExIXY8TL6ANF0am&ust=1602980185366000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCSx9asuuwCFQAAAAAdAAAAABAD',
        title:  'News in Review Fall 2019',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+Fall+2019+v2.pdf'
    },
    {
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Felectronic-brain-vector-17222489&psig=AOvVaw3PvMPgxExIXY8TL6ANF0am&ust=1602980185366000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCSx9asuuwCFQAAAAAdAAAAABAD',
        title:  'News in Review II Winter 2020',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/News+in+Review+II+Winter+2020.pdf'
    },
    {
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Felectronic-brain-vector-17222489&psig=AOvVaw3PvMPgxExIXY8TL6ANF0am&ust=1602980185366000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCSx9asuuwCFQAAAAAdAAAAABAD',
        title: 'The Review IV Spring 2020',
        link: 'https://elasticbeanstalk-us-west-1-133954069817.s3-us-west-1.amazonaws.com/The+Review+IV+Spring+2020.pdf'
    }
]

app.get("/print", (req, res) => {
    res.status(200).send({
        success:'true',
        data: printLinks,
    })

})