import * as React from "react";
import { AppStatQueryComponent, APP_STAT_QUERY } from "../../gql/queries/stats/AppStatQuery";
import { Statistic, Icon } from "semantic-ui-react";
import { Col, Row, } from 'react-grid-system';

class AppEmailCount extends React.Component<{}> {
    render() {
        return (
            <>
                <AppStatQueryComponent query={APP_STAT_QUERY} >
                    {
                        response => {
                            if (!response.data || response.loading) {
                                return null;
                            }
                            return (
                                <>
                                    <Row >
                                        <Col offset={{ xs: 5, lg: 5 }}>
                                            <Statistic size="huge">
                                                <Statistic.Value>
                                                    <Icon name='mail' />
                                                    {response.data.appStat.emailCount}
                                                </Statistic.Value>
                                                <Statistic.Label>Emails moved by Boring Moving</Statistic.Label>
                                            </Statistic>
                                        </Col>
                                    </Row>
                                </>
                            )
                        }
                    }
                </AppStatQueryComponent >
            </>
        );
    }
}

export { AppEmailCount }