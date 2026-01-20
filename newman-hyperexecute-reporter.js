/**
 * Custom Newman Reporter for HyperExecute
 * Place this file in your project root
 */

module.exports = function(newman, reporterOptions, collectionRunOptions) {
  newman.on('start', function(err, args) {
    console.log('HyperExecute Newman Test Execution Started');
    console.log('Collection:', args.cursor?.ref || 'Unknown');
  });

  newman.on('beforeItem', function(err, args) {
    const itemName = args.item?.name || 'Unnamed Request';
    console.log(`\n[TEST_START] ${itemName}`);
  });

  newman.on('request', function(err, args) {
    const itemName = args.item?.name || 'Unnamed Request';
    const requestName = args.request?.name || itemName;
    
    if (err) {
      console.log(`[TEST_FAILED] ${requestName}`);
      console.error(`Error: ${err.message || err}`);
    } else {
      const statusCode = args.response?.code;
      const responseTime = args.response?.responseTime;
      console.log(`[TEST_INFO] ${requestName} - Status: ${statusCode}, Time: ${responseTime}ms`);
    }
  });

  newman.on('assertion', function(err, args) {
    const assertionName = args.assertion || 'Assertion';
    
    if (err) {
      console.log(`[ASSERTION_FAILED] ${assertionName}`);
      console.log(`  Expected: ${err.expected}`);
      console.log(`  Actual: ${err.actual}`);
    } else {
      console.log(`[ASSERTION_PASSED] ${assertionName}`);
    }
  });

  newman.on('item', function(err, args) {
    const itemName = args.item?.name || 'Unnamed Request';
    
    if (err) {
      console.log(`[TEST_END] ${itemName} - FAILED`);
    } else {
      console.log(`[TEST_END] ${itemName} - PASSED`);
    }
  });

  newman.on('done', function(err, summary) {
    console.log('\n' + '='.repeat(60));
    console.log('HyperExecute Newman Test Execution Summary');
    console.log('='.repeat(60));
    
    if (err || summary.error) {
      console.error('[ERROR] Collection run encountered an error');
      console.error(err || summary.error);
    }
    
    const run = summary.run;
    console.log(`Total Requests: ${run.stats.requests.total}`);
    console.log(`Failed Requests: ${run.stats.requests.failed}`);
    console.log(`Total Assertions: ${run.stats.assertions.total}`);
    console.log(`Failed Assertions: ${run.stats.assertions.failed}`);
    console.log(`Total Test Scripts: ${run.stats.testScripts.total}`);
    console.log(`Failed Test Scripts: ${run.stats.testScripts.failed}`);
    
    if (run.failures && run.failures.length > 0) {
      console.log('\nFailures:');
      run.failures.forEach(function(failure, index) {
        console.log(`  ${index + 1}. ${failure.error.name}: ${failure.error.message}`);
        if (failure.at) {
          console.log(`     At: ${failure.at}`);
        }
      });
    }
    
    console.log('='.repeat(60));
  });
};
