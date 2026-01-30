import ratelimit from "../../config/upstash.js";

const rateLimiter = async(req,res,next)=>{
    try{
        const identifier = "my-limit-key";
        const { success } = await ratelimit.limit(identifier);
        if (!success) {
            return res.status(429).json({
                message:"Too many requests, please try again later."
            })
        }
        next(); //next passes control to the next middleware or route handler in the Express request–response cycle.
    }catch(error){
        console.log("Rate limit error",error);
        next(error);
    }
}

export default rateLimiter;