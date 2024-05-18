import Image from "next/image";

export default function Custom404() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image
                src="/static/images/404.png"
                alt="404"
                height={800}
                width={800}
                className="flex justify-center content-center"
            />
        </div>
    );
}
