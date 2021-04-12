import React, {Component} from 'react'; 
import {Button, Form, Input, Message} from 'semantic-ui-react'; 
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';


class ContributeForm extends Component{
    state = {
        value: '',
        errorMessage: '',
        loading: false
    }

    onSubmit= async(event)=>{
        event.preventDefault();
        this.setState({loading: true, errorMessage:''})
        try{
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts(); 
             
            await campaign.methods.contribute().send(
                {
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'ether')
                });
            this.setState({errorMessage: ''});
            this.setState({loading: false});
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        }catch(error){
            this.setState({errorMessage: error.message});
            this.setState({loading: false});
        }
       
    }

    render(){
        return( 
            // <h3>Contribute to this Campaign</h3>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input 
                        label="ether" 
                        labelPosition="right"    
                        value={this.state.value}
                        onChange={event=> this.setState({value: event.target.value})}
                        />
                    
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage}></Message>

                <Button primary loading={this.state.loading}>Contribute!</Button>
            </Form> 
            </div>
        )
    }
}

export default ContributeForm;