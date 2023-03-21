const logRequest = (req, res, next) => {
    console.log('log terjadi request ke path ini : ',req.path);
    next(); 
    // menghentikan proses selanjutnya yang ada di middleware selanjutnya
}

module.exports = logRequest;