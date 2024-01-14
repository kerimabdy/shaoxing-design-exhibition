import React from "react";
import { StudentProfile } from "../../../entities/students/types";
import Image from "next/image";

const studentProfile: StudentProfile = {
  name: "王文慧",
  hometown: "江西吉安",
  phoneNumber: "18170654618",
  email: "2954377749@qq.com",
  skills: ["Ps", "Ai", "Id", "An", "Ae", "Cdr"],
  selfEvaluation: "有较强的沟通能力、对视传专业知识熟练掌握，本人性格活泼外向，有亲和力，喜欢艺术，有较强的自律能力和学习能力较强",
  practicalExperience: [
    "2022年12月-2023年5月在涂创艺术担任美术助教",
    "2023年6月-2023年7月在大鱼儿童美学馆担任美术助教",
    "2023年11月在青绘儿童美术馆担任美术助教"
  ],
  personalAwards: [
    "第 15 届全国大学生广告艺术大赛平面类国家级二等奖",
    "“建行裕农通杯”第六届浙江省大学生乡村振兴创意大赛金奖",
    "绍兴市第七届大学生文创产业与艺术设计大赛纹样类三等奖一次",
    "绍兴市第七届大学生文创产业与艺术设计大赛插画类三等奖两次",
    "绍兴市第七届大学生文创产业与艺术设计大赛IP类二等奖三次",
    "绍兴市高校艾滋病性病防治宣传方案及科普作品评选大赛二等奖",
    "绍兴市第二届大学生广告艺术竞赛一等奖、二等奖、三等奖两次",
    "获综合三等奖学金一次，单项奖学金四次"
  ]
};

export const StudentPageProfile = () => {
  return <div>
    <div className="relative flex  flex-col md:flex-row divide-x divide-zinc-800">
      <div className="w-full md:w-2/4 max-w-screen-md p-6">
        <div className="aspect-[3/4] sticky top-6 rounded-xl overflow-hidden">
          <Image fill src={'/student/student1/image.jpg'} alt="student image" className=" object-cover" />
        </div>
      </div>
      <div className="flex-grow ">
        <div className="relative w-full mx-auto max-w-screen-md p-6">
          <div className=" flex gap-4 items-baseline">
            <h2 className='text-6xl leading-none '>{studentProfile?.name}</h2>
            <span className='text-zinc-500 text-xl'>({studentProfile?.name})</span>
          </div>
          <div className="mt-6">
            <p className="text-zinc-300 text-xl ">
              {studentProfile?.selfEvaluation}
            </p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6   grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">籍贯</h4>
          <div className=" flex-grow">
            <p className='text-zinc-500 text-xl'>{studentProfile?.hometown}</p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6  grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">电话号码</h4>
          <div className=" flex-grow">
            <p className='text-zinc-500 text-xl'>{studentProfile?.phoneNumber}</p>
          </div>
        </div>

        <div className="relative w-full mx-auto max-w-screen-md p-6  grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">邮箱</h4>
          <div className=" flex-grow">
            <p className='text-zinc-500 text-xl'>{studentProfile?.email}</p>
          </div>
        </div>

        {studentProfile.skills && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">掌握技能</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {studentProfile?.skills.map(item => {
                return <li key={item}>
                  <h6><span className='block px-4 border border-zinc-800 rounded-full bg-white bg-opacity-10 backdrop-blur-md leading-none py-1.5 pb-2 text-zinc-500 text-base'>{item}</span></h6>
                </li>
              })}
            </ul>
          </div>
        </div>}

        {studentProfile.practicalExperience && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">能力实践经验</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {studentProfile?.practicalExperience.map(item => {
                return <li key={item}>
                  <h6 className="text-zinc-500 text-xl ">{item}</h6>
                </li>
              })}
            </ul>
          </div>
        </div>}

        {studentProfile.personalAwards && <div className="relative w-full mx-auto max-w-screen-md p-6 grid sm:grid-cols-2 gap-4">
          <h4 className="text-base flex-grow font-semibold">能力实践经验</h4>
          <div className=" flex-grow">
            <ul className="flex flex-wrap gap-2">
              {studentProfile?.personalAwards.map(item => {
                return <li key={item}>
                  <h6 className="text-zinc-500 text-xl ">{item}</h6>
                </li>
              })}
            </ul>
          </div>
        </div>}



      </div>
    </div>
  </div>
}