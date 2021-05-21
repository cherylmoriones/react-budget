
import { Container,Header, Grid, Segment, Statistic, StatisticLabel, StatisticValue, Icon, Form, FormGroup, Button } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>  
       <Statistic size='small'>
         <Statistic.Label> Your Balance:</Statistic.Label>
         <Statistic.Value>2,550.53</Statistic.Value>
       </Statistic>

       <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                 <Statistic size='tiny' color='green'>
                    <StatisticLabel style={{textAlign:'left'}}>
                      Income
                    </StatisticLabel>
                    <StatisticValue>1,045.50</StatisticValue>
                 </Statistic>
              </Grid.Column>
              <Grid.Column>
                 <Statistic size='tiny' color='red'>
                    <StatisticLabel style={{textAlign:'left'}}>
                      Expenses
                    </StatisticLabel>
                    <StatisticValue>623.50</StatisticValue>
                 </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
       </Segment>
 
        <Header as='h3'>History</Header>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$10,000</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered />
                <Icon name='trash' bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment color='green'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Something Else</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$100,000</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered />
                <Icon name='trash' bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment color='green'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$20,000</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered />
                <Icon name='trash' bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as='h3'>Add new transaction</Header>
        <Form unstackable>
          <FormGroup>
            <Form.Input 
              icon='tags'
              width={12}
              label='Description'
              placeholder='New shinny thing'
            />
            <Form.Input
              icon='dollar'
              iconPosition='left'
              width={4}
              label='Value'
              placeholder='100.00'
            />
          </FormGroup>
          <Button.Group style={{ marginTop: 20 }}>
            <Button>
              Cancel    
            </Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>

    </Container> 
  );
}

export default App;
