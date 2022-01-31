import { ITranslatedPost } from '../../interfaces'

export interface IPostCard {
    post: ITranslatedPost
}
function RecentPost({ post }: IPostCard) {
    return (<div className="bg-cover text-left w-full h-40 rounded hover:shadow-lg md:h-36" style={{
        backgroundImage: `url(${post.hero})`
    }}>
        <a href={`${post.slug}`}>
            <div className="rounded flex items-center w-full h-full bg-[rgba(0,0,0,0.6)]">
                <div className="py-2 px-4">
                    <div className="capitalize text-sm text-green-400 mb-2">
                        photography
                    </div>
                    <div className="mb-2">
                        <div className="font-semibold leading-tight text-2xl text-gray-100 hover:text-green-100">
                            {post.title}
                        </div>
                    </div>
                    <div className="flex text-gray-200 text-sm">
                        <div className="pr-3 moment" data-time="2021-12-19 14:58:54">a month ago</div>
                        <div className="capitalize">
                            published by Swaye Chateau
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>)
}

export default RecentPost