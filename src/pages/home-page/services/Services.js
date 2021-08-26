import _ from 'lodash';
import t from 'translator';
import {ServiceCard} from "./ServiceCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function getServiceList(lang) {
    return [
        {title: t(lang, 'skills.CMS.title'), text: t(lang, 'skills.CMS.text')},
        {title: t(lang, 'skills.dataCollection.title'), text: t(lang, 'skills.dataCollection.text')},
        {title: t(lang, 'skills.database.title'), text: t(lang, 'skills.database.text')},
        {title: t(lang, 'skills.webApp.title'), text: t(lang, 'skills.webApp.text')},
        {title: t(lang, 'skills.websites.title'), text: t(lang, 'skills.websites.text')}
    ]
}

export function Services() {
    const serviceList = getServiceList('en');

    return (
        <div id={'service-list'} className={'justify-content-center p-5'}>
                <h2 className={'pb-5'}>What I can do for you...</h2>
            <Row>
            {_.map(serviceList, service =>
                <Col xs={12} md={6} lg={4}>
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        text={service.text}
                    />
                </Col>
            )}
            </Row>
        </div>
    )
}

// export const skills = {
//     contentManagementSystems: {
//         title: {
//             en: 'Content Management Systems',
//             it: ''
//         },
//         text: {
//             en: 'If you find yourself needing an easy, long lasting way to update translations on your ' +
//                 'large website, then maybe you should try using Sanity Studio. With my expertise, we could' +
//                 ' set up a long lasting, dynamic translations website',
//             it: ''
//         }
//     },
//     dataCollection: {
//         title: {
//             en: 'System data collection & visualization',
//             it: ''
//         },
//         text: {
//             en: 'Data collection is vital to make educated strategic decisions about what aspects of a business' +
//                 ' are being used, need improvement, and so much more! You can read more about it here',
//             it: ''
//         }
//     },
//     database: {
//         title: {
//             en: 'Databases',
//             it: 'Database'
//         },
//         text: {
//             en: 'Data is good',
//             it: ''
//         }
//
//     }
// }