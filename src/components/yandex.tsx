import { newsTitels, Jinx } from '../data/data'

import Link from './link'
import Search from './search'
import TextItem from './text-item'
import CaseItem from './case-item'
import Ads from './ads'

interface YandexProps {

}

function Yandex() {

    return (
        <div className="yandex">
            <div className="yandex-upper">
                <CaseItem title={`Сейчас`}>
                    {Jinx.map(jinx => <TextItem key={jinx.id} text={jinx.jinx} />)}
                </CaseItem>

                <Ads imgLink={"8378460d2d9dcef9762f818109433d58.jpg"} classCSS={'case-banner'}>
                    <p>This is JIIIIIIIIIINX!</p>
                </Ads>
            </div>

            <div className="search">
                {newsTitels.map(item => <Link key={item.id} title={item.title} />)}
                <Search />
                <TextItem text={`Найдется все, например Jinx!`} />
            </div>

            <Ads imgLink={"LoL-Arcane-Jinx-1.jpg"} classCSS={'banner'} />

            <div className="yandex-buttom">
                <CaseItem title={`Погода`}>
                    <p>Холодно, дома сиди и кофе пей</p>
                </CaseItem>
                <CaseItem title={`Эфир`}>
                    {Jinx.map(jinx => <TextItem key={jinx.id} text={jinx.jinx} />)}
                </CaseItem>
                <CaseItem title={`Топ запросов`}>
                    {Jinx.map(jinx => <Link key={jinx.id} title={jinx.jinx} />)}
                </CaseItem>
            </div>

        </div>
    )
}

export default Yandex