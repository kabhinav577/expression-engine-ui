import { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

import ExpRulesData from './ExpRulesData';
import JsonData from './JsonData';

const ExpressionForm = () => {
  const [rules, setRules] = useState([
    {
      key: 'age',
      output: {
        value: 60,
        operator: '>=',
        score: 50,
      },
    },
  ]);

  const [combinator, setCombinator] = useState('and');
  const [newRule, setNewRule] = useState({
    key: 'age',
    output: {
      value: '',
      operator: '>=',
      score: '',
    },
  });

  const addExpression = () => {
    // Check if any of the input fields is empty before adding a new expression
    if (newRule.output.value === '' || newRule.output.score === '') {
      alert('Please fill in all fields before adding a new expression.');
      return;
    }

    if (newRule.output.value) setRules([...rules, { ...newRule }]);
    setNewRule({
      key: 'age',
      output: {
        value: '',
        operator: '>=',
        score: '',
      },
    });
  };

  const deleteExpression = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleCombinatorChange = (e) => {
    setCombinator(e.target.value);
  };

  const handleInputChange = (field, value) => {
    if (field === 'key') {
      setNewRule({
        ...newRule,
        [field]: value,
      });
    } else {
      setNewRule({
        ...newRule,
        output: {
          ...newRule.output,
          [field]: value,
        },
      });
    }
  };

  return (
    <>
      <Container className="expression-form">
        <Form>
          <Form.Group className="mb-3 mx-3">
            <Form.Label>Combinator</Form.Label>
            <Form.Control
              as="select"
              value={combinator}
              onChange={handleCombinatorChange}
            >
              <option value="and">AND</option>
              <option value="or">OR</option>
            </Form.Control>
          </Form.Group>
          <Row className="mb-3 mx-2">
            <Col md={3} xs={6}>
              <Form.Group>
                <Form.Label>Rule Type</Form.Label>
                <Form.Control
                  as="select"
                  value={newRule.key}
                  onChange={(e) => handleInputChange('key', e.target.value)}
                >
                  <option value="age">Age</option>
                  <option value="credit_score">Credit Score</option>
                  <option value="account_balance">Account Balance</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3} xs={6}>
              <Form.Group>
                <Form.Label>Operator</Form.Label>
                <Form.Control
                  as="select"
                  value={newRule.output.operator}
                  onChange={(e) =>
                    handleInputChange('operator', e.target.value)
                  }
                >
                  <option value=">">{'>'}</option>
                  <option value="<">{'<'}</option>
                  <option value=">=">{'>='}</option>
                  <option value="<=">{'<='}</option>
                  <option value="=">{'='}</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3} xs={6}>
              <Form.Group>
                <Form.Label>Value</Form.Label>
                <Form.Control
                  type="number"
                  value={newRule.output.value}
                  onChange={(e) => handleInputChange('value', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3} xs={6}>
              <Form.Group>
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="number"
                  value={newRule.output.score}
                  onChange={(e) => handleInputChange('score', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="">
              <Button
                variant="primary"
                onClick={addExpression}
                className="my-3"
              >
                Add Expression
              </Button>
            </Col>
          </Row>
        </Form>
        <ExpRulesData
          rules={rules}
          combinator={combinator}
          deleteExpression={deleteExpression}
        />
      </Container>

      <JsonData rules={rules} combinator={combinator} />
    </>
  );
};

export default ExpressionForm;
