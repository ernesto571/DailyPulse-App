import ArticleCard from "../components/ArticleCard"
import { getGeneralNews } from "../services/BackendNewsApi"

function GeneralNews() {

    return(
        <div>
            <ArticleCard 
            title="GENARAL NEWS"
            getCategoryNews={getGeneralNews}
            start={6}
            />

        </div>
    )
    
}
export default GeneralNews