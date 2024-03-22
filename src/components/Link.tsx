interface LinkProps {
    url: string;
    title: string;
}

export const Link = ({ url, title }: LinkProps) => {

    return (
        <a
            className="text-soft-cyan"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {title}
        </a>
    )
}