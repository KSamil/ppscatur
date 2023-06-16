const postUpload = (req, res) => {
    res.json({
        message: 'POST /upload success',
    })
    res.redirect('/profile')
}

module.exports = {
    postUpload,
}