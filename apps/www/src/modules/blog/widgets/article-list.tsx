import { Container } from "@/modules/common/components/container";
import ArticleCard, { ArticleCardProps } from "../components/article-card";

export type ArticleListProps = {
    container?: boolean;
    articles: ArticleCardProps[];
};

const ArticleList: React.FC<ArticleListProps> = ({ container, articles }) => {
    return (
        <Container enabled={container}>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2">
                {articles?.map((article, index) => {
                    return (
                        <li key={index}>
                            <ArticleCard {...article} />
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
};

export { ArticleList };
