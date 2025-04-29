// Add in script section
const repairStatus = {
    '1234': { stage: 'Diagnosis', eta: '2 days' },
    // Sample tracking data
};

function checkRepairStatus() {
    const trackingId = prompt('Enter your tracking ID:');
    if (repairStatus[trackingId]) {
        alert(`Status: ${repairStatus[trackingId].stage}\nETA: ${repairStatus[trackingId].eta}`);
    }
}
