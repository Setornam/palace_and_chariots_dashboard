import React, { useState } from 'react';
import AccessLog from '../tabs/auditLogTabs/AccessLog';
import ActivityLog from '../tabs/auditLogTabs/ActivityLog';

const AuditLogs = () => {
    const tabData = [
        { id: 1, label: 'Access Log' },
        { id: 2, label: 'Activity Log' },
      ];

    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className='customers-container'>
                <div className='top-bar'>
                    <div className="heading-container">
                        <h1>Audit Logs</h1>
                        <div className="tabs-container">
                            {tabData.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}
                                    onClick={() => handleTabChange(tab.id)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='table'>
                    {activeTab === 1 && <AccessLog />}
                    {activeTab === 2 && <ActivityLog />}
                </div>
            </div>
            <style jsx>
                {`
                    .customers-container {
                        display: block;
                        background-color: #fff;
                        width: 77.27vw;
                        height: 95.16vh;
                        position: relative;
                        left: 1.56vw;
                        top: -5.76vh;
                        border-radius: 6px;
                    }

                    .top-bar {
                        display: flex;
                        height: 100px;
                        width: 100%;
                        border-radius: 6px 6px 0 0;
                    }

                    .heading-container {
                        width: 50%;
                        padding-left: 0px;
                    }

                    .heading-container h1 {
                        font-size: 24px;
                        color: #595959;
                        font-weight: 600;
                        padding: 2.3vh 0 0 3.9vw;
                    }

                    .tabs-container {
                        display: flex;
                        width: 73.4vw;
                        padding: 2.3vh 0 0 3.9vw;
                        border-bottom: 1px solid #CDCDCD;
                    }

                    .tab {
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 400;
                        color: #595959;
                        margin-right: 1.56vw;
                    }


                    .active-tab {
                        border-bottom: 3px solid  #595959;
                        
                    }

                    .table {
                        position: relative;
                        top: 2.3vh;
                        left: 2.34375vw;
                    }

                    .active-requests-table{
                        width: 77.34vw;
                        height: 56.3vh;
                        position: relative;
                        top: 4.6vh;
                        left: -2.34vw;
                        border-bottom: 1px solid #CDCDCD ;
                        padding-bottom: 3.456vh;
                    }

                    .active-requests-table th{
                        color: #595959;
                        font-size: 14px;
                        font-weight: 600;
                        text-align: left;
                        width: 5%;
                        position: relative;
                        top: -1.73vh;
                        left: 3.9vw;
                    
                    }

                    .active-requests-table td{
                        color: #595959;
                        font-size: 14px;
                        font-weight: 400;
                        padding: 2.13vh 0px 0 0px;
                        position: relative;
                        left: 3.9vw;

                    }

                    .row-line {
                        border-bottom: 1px solid #CDCDCD;
                        position: absolute;
                        margin-top: 0.346vh;
                        left: -1px;
                        width: 77.34vw;
                    }

                `}
            </style>
        </div>
    );
}

export default AuditLogs;
