
export default function ArticleImage({ imageName }) {
    return (
        <div>
            <img
                className="hidden dark:block "
                src={"/articleImages/" + imageName + "-dark.png"}
                alt="apple store download"
            />
            <img
                className="block dark:hidden "
                src={"/articleImages/" + imageName + "-light.png"}
                alt="apple store download"
            />
        </div>
    )
}