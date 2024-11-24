
export default function ChangeLogImage({ imageName }) {
    return (
        <div>
            <img
                className="hidden dark:block my-10 md:rounded-2xl"
                src={"/changelogImages/" + imageName + "-dark.jpg"}
                alt="apple store download"
            />
            <img
                className="block dark:hidden my-10 md:rounded-2xl"
                src={"/changelogImages/" + imageName + "-light.jpg"}
                alt="apple store download"
            />
        </div>
    )
}