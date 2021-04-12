import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/layout';
import {Link} from '../routes'; 

class CampaignIndex extends Component{

    // This method works for nextjs for initial data loading. Its a static method.
     static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaign().call();

        return {campaigns};
    }

    // This method Works for create-react-app project for initial data loading
    // async componentDidMount(){}

    renderCampaigns(){
        const items = this.props.campaigns.map(address=>{
            return {
                header: address,
                description:(
                    <Link route={`/campaigns/${address}`}>
                     <a><Icon circular color='blue' name='sign-in' />View Campaign</a>
                     </Link>),
                fluid: true
            }
        });

        return <Card.Group items={items} />;
    }

    render(){
        return(
            <Layout>
            <div>
                <h3>Campaigns</h3>

                <Link route="/campaigns/new">
                    <a>
                        <Button floated="right" content='Create Campaign' icon='add circle' labelPosition='left' primary />
                    </a>
                </Link>
                {this.renderCampaigns()}

            </div>
            </Layout>
        )
    }
}

export default CampaignIndex;