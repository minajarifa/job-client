import { info } from "autoprefixer";
import { easeOut, motion } from "motion/react";
import banner1 from "../../../../public/banner1.jpg";
import banner2 from "../../../../public/banner2.jpg";
export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={banner1}
            animate={{y:[50,100,50]}}
            transition={{duration:10,repeat:Infinity}}
            className="max-w-sm shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400"
          />
          <motion.img
            src={banner2}
            animate={{x:[100,150,100]}}
            transition={{duration:10,repeat:Infinity,delay:5}}
            className="max-w-sm shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            className="text-5xl font-bold"
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
          >
            Latest
            <motion.span
              className="mx-3"
              animate={{ color: ["#FFC300", "#c6ef1f", "#000000"] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              job
            </motion.span>
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
