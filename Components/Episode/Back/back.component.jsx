import Link from "next/link";

export const Back = ({pos}) => (
    <div className={`back-to-episodes ${pos}`}>
        <div className="container">
            <Link href="/podcast"><a><span className="arrow-left"></span>All Episodes</a></Link>
        </div>
    </div>
)