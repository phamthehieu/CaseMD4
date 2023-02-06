export const checkRole = async (req, res, next) => {
    let role = req["decode"].position
    if (role === "admin") {
        next()
    } else {
        res.status(403).json({
            message: 'Bạn Không Có Quyền'
        })
    }
}