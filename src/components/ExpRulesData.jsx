/* eslint-disable react/prop-types */
import { Button, Col, Row } from 'react-bootstrap';

const ExpRulesData = ({ rules, deleteExpression }) => {
  return (
    <>
      <h3 className="text-center text-info">Expression Rules Data</h3>
      <Row className="my-3">
        {rules.map((rule, index) => (
          <Col key={index} md={12} xl={6} className="mb-3">
            <div className="d-flex justify-content-between align-items-center py-3 px-2 rules-data rounded">
              <div className="d-flex justify-content-center align-items-center">
                <p className="px-2 text-center">
                  <strong>Type:</strong> {rule.key}
                </p>
                <p className="px-2 text-center">
                  <strong>Operator:</strong> {rule.output.operator}
                </p>
                <p className="px-2 text-center">
                  <strong>Value:</strong> {rule.output.value}
                </p>
                <p className="px-2 text-center">
                  <strong>Score:</strong> {rule.output.score}
                </p>
              </div>
              <Button
                variant="danger"
                onClick={() => deleteExpression(index)}
                className="mt-2 mx-2"
              >
                Delete
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ExpRulesData;
