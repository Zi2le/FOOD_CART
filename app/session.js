import { withIronSession } from "next-iron-session";

export default withIronSession(
        async ({req, res}) => {
                req.session = { ...req.session,
                cart:[],}
        },
        {
                password: "Zanrxis_04",
                cookieName:"Alexander.Food-Cart",
                cookieOptions:{
                        secure: false,
                },
        }
)