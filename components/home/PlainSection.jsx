import React from 'react'
import CommonNewsFetauredSection from './CommonNewsFetauredSection'

export default function PlainSection({ categoryDetail, posts }) {
    return (
        <>

            <div className="all-cat">
                <h5><span>{categoryDetail.category}</span></h5>
                <div className="ac-inner">
                    <div className="col-md-12">
                        <CommonNewsFetauredSection categoryDetail={categoryDetail} post={posts
                            .filter((filtered) => filtered.isFetaured === true)
                            .sort(
                                (a, b) =>
                                    new Date(b.createdAt).getTime() -
                                    new Date(a.createdAt).getTime()
                            )[0]
                        } />
                        {
                            posts
                                .filter((filtered) => filtered.isFetaured === false)
                                .sort(
                                    (a, b) =>
                                        new Date(b.createdAt).getTime() -
                                        new Date(a.createdAt).getTime()
                                )
                                .slice(0, 2)
                                .map((post) => (
                                    <>
                                        <div className="col-md-3">
                                            <div className="allcat-feed">
                                                <img src={post.img} className="img-responsive" alt={post.imgAlt} />

                                                <h4><a href="#">
                                                    {post.postitle}
                                                </a></h4>
                                            </div>
                                            <div className="space30"></div>

                                        </div>
                                    </>
                                ))
                        }
                        {
                            posts
                                .filter((filtered) => filtered.isFetaured === false)
                                .sort(
                                    (a, b) =>
                                        new Date(b.createdAt).getTime() -
                                        new Date(a.createdAt).getTime()
                                )
                                .slice(2, 4)
                                .map((post) => (
                                    <>
                                        <div className="col-md-3">
                                            <div className="allcat-feed">
                                                <img src={post.img} className="img-responsive" alt={post.imgAlt} />

                                                <h4><a href="#">
                                                    {post.postitle}
                                                </a></h4>
                                            </div>
                                            <div className="space30"></div>

                                        </div>
                                    </>
                                ))
                        }



                    </div>

                    <div className="clearfix"></div>

                    <div className="col-md-12">
                        {
                            posts
                                .filter((filtered) => filtered.isFetaured === false)
                                .sort(
                                    (a, b) =>
                                        new Date(b.createdAt).getTime() -
                                        new Date(a.createdAt).getTime()
                                )
                                .slice(4, 8)
                                .map((post) => (
                                    <>
                                        <div className="col-md-3">
                                            <div className="allcat-feed">
                                                <img src={post.img} className="img-responsive" alt={post.imgAlt} />

                                                <h4><a href="#">
                                                    {post.postitle}
                                                </a></h4>
                                            </div>
                                            <div className="space30"></div>

                                        </div>
                                    </>
                                ))
                        }
                    </div>


                </div>
            </div>
            <div className="space30"></div>

        </>
    )
}
