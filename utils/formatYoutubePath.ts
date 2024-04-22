export default function (path: string) {
    const videoId = path.split('v=')[1]

    return `https://www.youtube.com/embed/${videoId}`
}
