import React from 'react'

function Card({username, post, url}) {
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={url} alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus qui repudiandae ipsa consectetur obcaecati optio praesentium sunt molestias tempore? Vitae id at aperiam suscipit nobis architecto, expedita repellat odit obcaecati?
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card